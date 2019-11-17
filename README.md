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
 truffle migrate --network rinkeby

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


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xd85aa82d1185d6d3b3397fbca91edd7b1e5e0a1a22eb0b35e5652961420f8074
   > Blocks: 1            Seconds: 21
   > contract address:    0xf12bE8f4a81DccC5d895CD55C177b0799857282F
   > block number:        5450872
   > block timestamp:     1573902228
   > account:             0x6038c699e6bc985605d36819E10B722981a2D5cc
   > balance:             18.55348632
   > gas used:            223305
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00223305 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00223305 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x65646f37dc2524838e0edee566356c07ba1fb1db4976349f3b1194f0420b2a1c
   > Blocks: 0            Seconds: 13
   > contract address:    0xE391653B6e8CB44061db1cB05e4063e7A814206B
   > block number:        5450876
   > block timestamp:     1573902288
   > account:             0x6038c699e6bc985605d36819E10B722981a2D5cc
   > balance:             18.54276815
   > gas used:            1029454
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01029454 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xf6d18b43f2efa11d6366d1cd9f29e72a55022ae4ebc322e406bb85fd873e2ba4
   > Blocks: 1            Seconds: 18
   > contract address:    0xecD9171F7474D6A3237d3Fc13C98bab0b4D186e2
   > block number:        5450878
   > block timestamp:     1573902318
   > account:             0x6038c699e6bc985605d36819E10B722981a2D5cc
   > balance:             18.49818844
   > gas used:            4457971
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04457971 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.05487425 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.0571073 ETH



```
