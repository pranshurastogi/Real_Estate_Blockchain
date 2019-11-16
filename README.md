# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)


# Rinkeby

```
$ truffle migrate --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x767f3f


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        5450866
   > block timestamp:     1573902126
   > account:             0x6038c699e6bc985605d36819E10B722981a2D5cc
   > balance:             18.55325544
   > gas used:            246393
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00246393 ETH

   -------------------------------------
   > Total cost:          0.00246393 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > block number:        5450868
   > block timestamp:     1573902138
   > account:             0x6038c699e6bc985605d36819E10B722981a2D5cc
   > balance:             18.54037199
   > gas used:            1261322
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01261322 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        5450869
   > block timestamp:     1573902163
   > account:             0x6038c699e6bc985605d36819E10B722981a2D5cc
   > balance:             18.48734472
   > gas used:            5302727
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.05302727 ETH

   -------------------------------------
   > Total cost:          0.06564049 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.06810442 ETH


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x76a06a


```