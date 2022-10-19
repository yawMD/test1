import { expect } from "chai"

import { runScript } from "./scriptSandbox"
import axios from 'axios';


describe('ScriptMonitor V2', function ():void {
  this.timeout(10000);

  describe("runScript function", function ():void {
    let server: $TSFixMe;

    // create a quick express server

    before(function ():void {

      import express from "express"
      const app: $TSFixMe = express.getExpressApp();
      app.get("/test", (req: ExpressRequest, res: ExpressResponse) => res.send("yipee!"));
      server = app.listen(5050);
    });

    // close express server

    after(function ():void {
      server.close();
    });


    it("should return success for a valid script", async function ():void {
      const someFunction: Function = async (done: $TSFixMe): void => {



        const res: $TSFixMe = await axios.get("http://localhost:5050/test");

        done();
      }

      const result: $TSFixMe = await runScript(someFunction.toString(), true);
      expect(result).to.not.be.undefined;
      expect(result.success).to.be.true;
      expect(result.status).eq("completed");
      expect(result.executionTime).to.be.a('number');
      console.log(result.executionTime);

      expect(result.consoleLogs.length).eql(2);
      expect(result.consoleLogs).to.include('[log]: hello');
      expect(result.consoleLogs).to.include('[log]: world!');

    });


    it("should return false for error thrown in script", async function ():void {
      const someFunction: Function = async (done: $TSFixMe): void => {
        console.log('Error log');
        logger.error('Bad Error');
        throw new Error("Bad error");
      }
      const result: $TSFixMe = await runScript(someFunction.toString(), true);

      expect(result).to.not.be.undefined;
      expect(result.success).to.be.false;
      expect(result.status).eq("error");
      expect(result.executionTime).to.be.a('number');

      console.log(result.executionTime);

      expect(result.consoleLogs.length).eql(2);
      expect(result.consoleLogs).to.include('[error]: Bad Error');
      expect(result.consoleLogs).to.include('[log]: Error log');
    });


    it("should return scriptMonitor error when script returns a value in cb", async function ():void {
      const someFunction: Function = async (done: $TSFixMe): void => {
        done("Some Error");
      }
      const result: $TSFixMe = await runScript(someFunction.toString(), true);

      expect(result).to.be.ok;
      expect(result.success).to.be.false;
      expect(result.message).to.be.string("Script monitor resource error");
      expect(result.errors).to.be.ok;
      expect(result.status).eq("nonEmptyCallback");
      expect(result.executionTime).to.be.a('number');
      console.log(result.executionTime);
    });


    it("should return timeout error when script takes too long", async function ():void {
      const someFunction: Function = async (done: $TSFixMe): void => {
        return new Promise((resolve) => {
          setTimeout(() => "All timed out", 7000);
        })
      }
      const result: $TSFixMe = await runScript(someFunction.toString(), true, { maxScriptRunTime: 1500 });

      expect(result).to.be.ok;
      expect(result.success).to.be.false;
      expect(result.message).contains("Max. script execution time exceeded");
      expect(result.status).eq("timeout");
      expect(result.executionTime).to.be.a('number');
      console.log(result.executionTime);
    });


    it("should return timeout error when statement takes too long", async function ():void {
      const someFunction: Function = async (done: $TSFixMe): void => {
        while (true) {
          // statement stuck in loop or too busy
        }
      }
      const result: $TSFixMe = await runScript(someFunction.toString(), true, { maxSyncStatementDuration: 300 });

      expect(result).to.be.ok;
      expect(result.success).to.be.false;
      expect(result.message).contains("Max. synchronous statement execution time exceeded");
      expect(result.status).eq("timeout");
      expect(result.executionTime).to.be.a('number');
      console.log(result.executionTime);
    });
  });

});
