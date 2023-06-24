// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './AngelToken.sol';

contract AngelsFactory {
    address[] public deployedAngels;
    address public angelTokenAddress;

    function createAngel(
        string memory _name,
        uint256 _goal,
        uint256 _deadline,
        uint256 _minimumContribution,
        string memory _description
    ) public {
        address newAngel = address(
            new Angels(_name, _goal, _deadline, _minimumContribution, _description, address(this))
        );
        deployedAngels.push(newAngel);
    }

    function getDeployedAngels() public view returns (address[] memory) {
        return deployedAngels;
    }

    function getDeployedAngelsCount() public view returns (uint) {
        return deployedAngels.length;
    }

    function setAngelTokenAddress(address _angelTokenAddress) public {
        angelTokenAddress = _angelTokenAddress;
    }

    function transferAngelTokens(address _to, uint _amount) public {
        AngelToken angelToken = AngelToken(angelTokenAddress);
        angelToken.transfer(_to, _amount);
    }
}

contract Angels {
    string public name;
    uint256 public goal;
    uint256 public deadline;
    uint256 public minimumContribution;
    uint256 public amountRaised;
    address payable public beneficiary;
    bool public isGoalReached;
    bool public isClosed;
    address AngelsFactoryAddress;
    string public description;

    address[] public contributors;
    mapping(address => uint256) public contributions;

    constructor(
        string memory _name,
        uint256 _goal,
        uint256 _deadline,
        uint256 _minimumContribution,
        string memory _description,
        address _AngelsFactoryAddress
    ) {
        name = _name;
        goal = _goal;
        deadline = _deadline;
        minimumContribution = _minimumContribution;
        amountRaised = 0;
        beneficiary = payable(msg.sender);
        isGoalReached = false;
        isClosed = false;

        AngelsFactoryAddress = _AngelsFactoryAddress;
        description = _description;
    }

    function contribute(uint _value) public payable {
        require(!isClosed, 'This angel is closed');
        require(msg.value >= minimumContribution, 'You need to contribute more');
        require(msg.sender.balance >= _value, "You don't have enough balance");
        amountRaised += _value;
        if (amountRaised >= goal) {
            isGoalReached = true;
        }
        contributors.push(msg.sender);
        contributions[msg.sender] += _value;
        // AngelsFactory angelsFactory = AngelsFactory(AngelsFactoryAddress);
        // angelsFactory.transferAngelTokens(msg.sender, _value * 15000);
    }

    function closeAngel() public {
        require(msg.sender == beneficiary, 'You are not the beneficiary');
        require(!isClosed, 'This angel is already closed');
        require(block.timestamp >= deadline, 'The deadline has not been reached yet');
        isClosed = true;
        if (isGoalReached) {
            beneficiary.transfer(amountRaised);
            AngelsFactory angelsFactory = AngelsFactory(AngelsFactoryAddress);
            for (uint i = 0; i < contributors.length; i++) {
                payable(contributors[i]).transfer(contributions[contributors[i]]);
                angelsFactory.transferAngelTokens(msg.sender, contributions[contributors[i]] * 15000);
            }
        } else {
            for (uint i = 0; i < contributors.length; i++) {
                payable(contributors[i]).transfer(contributions[contributors[i]]);
            }
        }
    }
}
// posso fazer uma conta de conversão na qual a taxa de conversão da quantidade em doação(eth) eh convertida em AngelTokens
// quanto maior a taxa de conversão do projeto mais tokens serão distribuidos para quem tiver stake

// O que tá rolando eh que eu vou transferir tokens para a factory e a factory vai transferir para o contribuinte
