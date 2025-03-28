/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Initialize the login form
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');
    const errorMessage = document.getElementById('errorMessage');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Handle form submission
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic validation
        if (!username || !password) {
            showError('Please fill in all fields');
            return;
        }

        // Disable the login button while processing
        loginButton.disabled = true;
        loginButton.textContent = 'Logging in...';

        try {
            // Here we'll implement the actual Instagram login logic
            // For now, we'll just simulate a successful login
            await simulateLogin(username, password);
            
            // Store the credentials securely
            await storeCredentials(username, password);
            
            // Redirect to the main app interface
            // This will be implemented later
            console.log('Login successful');
            
        } catch (error) {
            showError(error.message || 'Login failed. Please try again.');
        } finally {
            // Re-enable the login button
            loginButton.disabled = false;
            loginButton.textContent = 'Log in';
        }
    });

    // Handle input validation
    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    });
}

// Simulate login process
function simulateLogin(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // For demo purposes, accept any non-empty credentials
            if (username && password) {
                resolve();
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 1500); // Simulate network delay
    });
}

// Store credentials securely
async function storeCredentials(username, password) {
    try {
        // We'll use the Cordova Storage plugin to store credentials securely
        // This will be implemented later
        console.log('Storing credentials...');
    } catch (error) {
        console.error('Error storing credentials:', error);
        throw new Error('Failed to store credentials');
    }
}

// Show error message
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    
    // Hide error message after 3 seconds
    setTimeout(() => {
        errorMessage.classList.remove('show');
    }, 3000);
}
