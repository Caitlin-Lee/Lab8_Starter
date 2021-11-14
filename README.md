# Lab 8 - Starter

## Caitlin Lee

### Check Your Understanding
1. Where would you fit your automated tests in your Recipe project development pipeline: Within a Github action that runs whenever code is pushed. Manually running the automated tests before pushing it would require a large amount of time. Running them after development is completed is also not good as debugging should be done throughout the entire process.
2. No, end to end tests are designed to mimic user actions. It should not test whether a function returns the correct output.
3. No, the scope of this feature is too large for unit testing. We cannot test how these individual components interact with each other on the message feature. 
4. Yes, testing this is within the power of a unit test. The scope isn't too big and will be able to execute quickly. The debugging is on a small scale and won't disrupt other unit tests.

Test screenshots inside screenshots folder.