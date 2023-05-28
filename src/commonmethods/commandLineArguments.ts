import {program} from 'commander'

import {parseConfig} from './parseConfig'




function loadRules(rules: [[string,string]]){

  for(const [option, description] of rules){

    program.option(option, description);

  }

    program.parse(process.argv)

}


function stripDashes(input:string) {
  let result = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== '-') {
      result += input[i];
    }
  }

  return result;
}


export function commandLineArguments( ): { [key: string]: any } {
  
  
  
  
  if (process.argv.length < 3) {

   console.error('No command line arguments provided');
   
   return {}
   
  }
  
    const script = process.argv[1];
  
    const args = process.argv.slice(2);

    const keyValuePairs: { [key: string]: string | boolean} = {};
  
    for (const arg of args) {
      
  

      const [key, value] = arg.split('=');
  
      if (key && value) {
        
        keyValuePairs[stripDashes(key)]= value;
      
      } else {

        console.error(`Invalid argument: ${arg}`);
      
      }
    }
  
    const result: {[key:string]: string} = { script:script, ...keyValuePairs };

    return parseConfig(result)

  }