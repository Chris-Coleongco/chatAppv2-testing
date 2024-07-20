import React, { useEffect, useState } from 'react';
import crypto from 'crypto-browserify';

const CryptoComponent = () => {
    const [publicKey, setPublicKey] = useState(null);
    const [sharedSecret, setSharedSecret] = useState(null);

    useEffect(() => {
        // Generate Diffie-Hellman parameters
        const diffieHellman = crypto.createDiffieHellman(128);
        const publicKey = diffieHellman.generateKeys('hex');
        setPublicKey(publicKey);

        // Simulate sending public key to another user (for demonstration purposes)
        // In a real application, you would send this to the other user securely
        const sendPublicKeyToOtherUser = (publicKey) => {
            // Here you could send the publicKey to the other user (e.g., through WebSocket, API, etc.)
            console.log('Sending public key to other user:', publicKey);
        };

        sendPublicKeyToOtherUser(publicKey);
    }, []);

    useEffect(() => {
        // This is a simulation of the other user receiving the public key and generating the shared secret
        const simulateOtherUserProcess = (receivedPublicKey) => {
            // In a real application, you would receive the publicKey from the other user securely
            const diffieHellman = crypto.createDiffieHellman(128);
            diffieHellman.generateKeys();
            const sharedSecret = diffieHellman.computeSecret(receivedPublicKey, 'hex', 'hex');
            setSharedSecret(sharedSecret);
            console.log('Shared secret computed:', sharedSecret);
        };

        // Simulate the other user receiving the public key and computing the shared secret
        simulateOtherUserProcess(publicKey);
    }, [publicKey]);

    return (
        <div>
            <h1>Diffie-Hellman Key Exchange</h1>
            <p>Public Key: {publicKey}</p>
            <p>Shared Secret: {sharedSecret}</p>
        </div>
    );
};

export default CryptoComponent;
