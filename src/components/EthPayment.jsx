import React, { useEffect, useState } from "react";
import { QRCodeSVG } from 'qrcode.react';
import { ethers } from "ethers";
import PaymentPage from "./PaymentPage";

const ETHPayment = () => {
  const [ethAddress, setEthAddress] = useState("");
  const [paymentURI, setPaymentURI] = useState("");

  useEffect(() => {
    try {
      // Generate a random wallet (for demonstration only!)
      // In production, use a secure and persistent wallet/address.
      const wallet = ethers.Wallet.createRandom();
      const address = wallet.address;
      setEthAddress(address);

      // Set the amount you want to request (in ETH)
      const amountInEth = "0.1";
      // Convert ETH to wei (the smallest unit)
      const amountInWei = ethers.parseEther(amountInEth).toString();

      // Create the payment URI according to EIP-681:
      // Format: ethereum:ADDRESS?value=AMOUNT_IN_WEI
      const uri = `ethereum:${address}?value=${amountInWei}`;
      setPaymentURI(uri);
    } catch (error) {
      console.error("Error generating payment details:", error);
    }
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Pay with ETH</h2>
      {/* Display the QR Code */}
      <QRCodeSVG value={paymentURI} size={256} />
      <p>
        <strong>ETH Address:</strong> {ethAddress}
      </p>
      <p>Scan the QR Code to pay 0.1 ETH</p>
    </div>
  );
};

export default ETHPayment;