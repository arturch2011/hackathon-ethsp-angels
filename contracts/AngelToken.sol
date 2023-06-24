// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import '../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '../node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol';
import '../node_modules/@openzeppelin/contracts/access/Ownable.sol';

contract AngelToken is ERC20, ERC20Burnable, Ownable {
    ///Cria variavel para armazenar o enderco atual do contrato AngelsFactory
    address public angelFactoryAddr;

    ///Constroi o token com as funcionalidades padrao do openzeppelin
    constructor() ERC20('AngelToken', 'AGT') {
        _mint(msg.sender, 100000000 * 10 ** decimals());
    }

    ///Funcao para mintar novos tokens
    ///@notice funcao exige gas fees (transact)
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    ///Funcao para salvar em uma variavel o endereco do PartyChain. Como parametro pede o endereco do contrato
    ///@notice funcao exige gas fees (transact)
    function setAngelFactoryAddress(address _contractaddress) public onlyOwner {
        angelFactoryAddr = _contractaddress;
    }

    ///Funcao para aprovar o contrato PartyChain a gastar um determinado numero de tokens. Como parametro pede a quantidade
    ///@notice funcao exige gas fees (transact)
    function aproveAngelFactory(uint _amount) public {
        approve(angelFactoryAddr, _amount);
    }
}
