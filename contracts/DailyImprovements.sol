// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './AngelToken.sol';

contract DailyImprovementsFactory {
    address[] public deployedDailyImprovements;
    address angelTokenAddress;

    function createDailyImprovements(
        string memory _name,
        string memory _goal,
        string memory _description,
        uint _inicio,
        uint _fim,
        address _validator,
        string memory _category
    ) public {
        address newDailyImprovements = address(
            new DailyImprovements(_name, _goal, _description, _inicio, _fim, _validator, _category, payable(msg.sender))
        );
        deployedDailyImprovements.push(newDailyImprovements);
    }

    function getDeployedDailyImprovements() public view returns (address[] memory) {
        return deployedDailyImprovements;
    }

    function getDeployedDailyImprovementsCount() public view returns (uint) {
        return deployedDailyImprovements.length;
    }

    function setAngelTokenAddress(address _angelTokenAddress) public {
        angelTokenAddress = _angelTokenAddress;
    }

    function transferAngelTokens(address _to, uint _amount) public {
        AngelToken angelToken = AngelToken(angelTokenAddress);
        angelToken.transfer(_to, _amount);
    }
}

contract DailyImprovements {
    string public name;
    string public goal;
    string public description;
    address payable public creator;

    address dailyImprovementsFactoryAddrs;
    address payable[] public participants;

    address public validator; // criar require

    uint public totalValidations;
    uint public minimumValidations;
    bool public isClosed;
    mapping(address => uint256) public contributions;
    mapping(address => uint256) public validations;
    mapping(address => uint) public awards;

    uint public inicio;
    uint public fim;
    string public category;
    mapping(address => bool) public prizeDonation;
    mapping(address => bool) public fullDonation;

    modifier restrictedCreator() {
        require(msg.sender == creator, 'Only the creator can call this function');
        _;
    }

    modifier restrictedValidador() {
        require(msg.sender == validator, 'Only the validator can call this function');
        _;
    }

    constructor(
        string memory _name,
        string memory _goal,
        string memory _description,
        uint _inicio,
        uint _fim,
        address _validator,
        string memory _category,
        address payable _creator
    ) {
        name = _name;
        category = _category;
        goal = _goal;
        description = _description;
        inicio = _inicio;
        fim = _fim;
        validator = _validator;
        creator = _creator;
    }

    function contribute(uint _value, bool _prizeDonation, bool _fullDonation) public payable {
        require(msg.value >= _value, 'Insufficient funds');
        require(!isClosed, 'This campaign is closed');
        prizeDonation[msg.sender] = _prizeDonation;
        fullDonation[msg.sender] = _fullDonation;
        contributions[msg.sender] += _value;
        participants.push(payable(msg.sender));
    }

    function validate(address _participant) public restrictedValidador {
        require(!isClosed, 'This campaign is closed');
        require(contributions[_participant] > 0, 'This participant has not contributed yet');
        require(validations[_participant] <= totalValidations, 'This participant has already accomplished the goal');
        validations[_participant] += 1;
    }

    function getParticipants() public view returns (address payable[] memory) {
        return participants;
    }

    function finalizeImprovement() public restrictedCreator {
        require(!isClosed, 'This campaign is closed');

        DailyImprovementsFactory dailyImprovementsFactory = DailyImprovementsFactory(dailyImprovementsFactoryAddrs);
        uint dontGetIt = 0;

        for (uint i = 0; i < participants.length; i++) {
            if (validations[participants[i]] >= minimumValidations) {
                if (!fullDonation[participants[i]]) {
                    participants[i].transfer(contributions[participants[i]]);
                    dailyImprovementsFactory.transferAngelTokens(participants[i], contributions[participants[i]] * 100);
                } else {
                    creator.transfer(contributions[participants[i]]);
                    dailyImprovementsFactory.transferAngelTokens(participants[i], contributions[participants[i]] * 100);
                }
            } else {
                dontGetIt += 1;
            }
        }

        uint value = address(this).balance;
        uint transferValue = 0;

        for (uint i = 0; i < participants.length; i++) {
            if (validations[participants[i]] >= minimumValidations) {
                if (!prizeDonation[participants[i]]) {
                    participants[i].transfer(value / (participants.length - dontGetIt)); // menos os participantes q não atingiram
                    awards[participants[i]] = value / (participants.length - dontGetIt);
                } else {
                    transferValue += value / (participants.length - dontGetIt);
                }
                creator.transfer(transferValue);
            }
        }

        isClosed = true;
    }

    function myProgress() public view returns (uint) {
        return validations[msg.sender];
    }

    function getAwards() public view returns (uint) {
        return awards[msg.sender];
    }
}
