import dotenv from 'dotenv';
import { DotenvParseOutput } from 'dotenv';
import {parseConfig} from './parseConfig'
import {handleError} from './handleError';

export function envFile(): { [key: string]: any }{

    try{
        const result = dotenv.config();
      
        if (result.error) {
          throw result.error;
        }
    
        const parsed: DotenvParseOutput | undefined = result.parsed
    
        if(!parsed){
            throw 'Error parsing .env file';
            
        }
    
        const config: { [key: string]: any} =  parseConfig(parsed)
    
        if (!config) {
            throw 'Error parsing configuration';
          
          }
        
            return config;
        }catch (error: unknown) {
            handleError(error)
            
    return {};
    }
            
    
    }