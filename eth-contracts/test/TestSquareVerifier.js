// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
var Verifier = artifacts.require("Verifier");

contract("Verifier", (accounts, web3) =>{
    let TEST;
    try {
        TEST = require("./TestConstants")(accounts, web3);
    } catch (e) {
        console.log(`TEST setup failed\n${e.message}`);
    }

    // console.log(TEST.correctProof);

    beforeEach(async function () {
         this.contract = await Verifier.new({from: TEST.contractOwner});
    });
    describe("Verifier tests", function () {

        it("verification with correct proof", async function () {
            // this.contract.Verified().on("data", event =>{
            //     assert.strictEqual(event.returnedValues,
            //         "Transaction successfully verified",
            //         "Unexpected verification result");
            // });
            let result = await this.contract.verifyTx.call(
                TEST.correctProof.A,
                TEST.correctProof.B,
                TEST.correctProof.C,
                TEST.correctInput,
                {from: TEST.contractOwner}
            );
            assert.strictEqual(result, true, "Unexpected verification result");

        });

        it("verification with incorrect proof", async function(){
            let result = await this.contract.verifyTx.call(
                TEST.badProof.A,
                TEST.badProof.B,
                TEST.badProof.C,
                TEST.badInput,
                {from: TEST.contractOwner}
            );
            assert.strictEqual(result, false, "Unexpected verification result");
        });
    })
});
// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps

    
// Test verification with incorrect proof
