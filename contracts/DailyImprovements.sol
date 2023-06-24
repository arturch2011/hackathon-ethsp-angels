// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './AngelToken.sol';

contract DailyImprovementsFactory {
    address[] public deployedDailyImprovements;
    address angelTokenAddress;

    function createDailyImprovements(string memory _name, string memory _goal, string memory _description) public {
        address newDailyImprovements = address(new DailyImprovements(_name, _goal, _description));
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
    address public creator;
    address payable public angels;
    address dailyImprovementsFactoryAddrs;
    address payable[] public participants;
    address[] public validators;
    uint public totalValidations;
    uint public minimumValidations;
    bool public isClosed;
    mapping(address => uint256) public contributions;
    mapping(address => uint256) public validations;
    mapping(address => uint) public awards;

    modifier restricted() {
        require(msg.sender == creator);
        _;
    }

    constructor(string memory _name, string memory _goal, string memory _description) {
        name = _name;
        goal = _goal;
        description = _description;
        creator = msg.sender;
    }

    function contribute(uint _value) public payable {
        require(msg.value >= _value, 'Insufficient funds');
        require(!isClosed, 'This campaign is closed');
        contributions[msg.sender] += _value;
        participants.push(payable(msg.sender));
    }

    function validate(address _participant) public restricted {
        require(!isClosed, 'This campaign is closed');
        require(contributions[_participant] > 0, 'This participant has not contributed yet');
        require(validations[_participant] <= totalValidations, 'This participant has already accomplished the goal');
        validations[_participant] += 1;
    }

    function getParticipants() public view returns (address payable[] memory) {
        return participants;
    }

    function finalizeImprovement() public restricted {
        DailyImprovementsFactory dailyImprovements = DailyImprovementsFactory(dailyImprovementsFactoryAddrs);
        for (uint i = 0; i < participants.length; i++) {
            if (validations[participants[i]] >= minimumValidations) {
                participants[i].transfer(contributions[participants[i]]);
                dailyImprovements.transferAngelTokens(participants[i], contributions[participants[i]] * 100);
            }
        }

        for (uint i = 0; i < participants.length; i++) {
            if (validations[participants[i]] >= minimumValidations) {
                participants[i].transfer(address(this).balance / participants.length); // menos os participantes q não atingiram
                awards[participants[i]] = address(this).balance / participants.length;
            }
        }

        isClosed = true;
        //angels.transfer(address(this).balance);
    }

    function setAngelAddress(address payable _angels) public {
        angels = _angels;
    }

    function myProgress() public view returns (uint) {
        return validations[msg.sender];
    }

    function getAwards() public view returns (uint) {
        return awards[msg.sender];
    }
}
