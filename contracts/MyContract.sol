// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

   contract MyContract {
    struct Payment {
    uint256 amount;
    string studentId;
    uint256 timestamp;
}
    event FeePaymentStarted(address indexed payer, string studentId, uint256 timestamp);
    event FeePaymentCompleted(address indexed payer, string studentId, uint256 amount, uint256 timestamp);

   
mapping(string => Payment) public payments;

function payFees(string memory studentId) public payable {
    require(msg.value > 0, "Fee amount must be greater than zero");
       emit FeePaymentStarted(msg.sender, studentId, block.timestamp);

    payments[studentId] = Payment({
        amount: msg.value,
        studentId: studentId,
        timestamp: block.timestamp
    });
      emit FeePaymentCompleted(msg.sender, studentId, msg.value, block.timestamp);
    
}

function getPaymentStatus(string memory studentId) public view returns (Payment memory) {
    return payments[studentId];
}


}
