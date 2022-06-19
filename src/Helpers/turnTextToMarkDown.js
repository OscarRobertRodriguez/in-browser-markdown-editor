import HeadingOne from "../Components/HeadingOne/HeadingOne";
import { nanoid } from 'nanoid'
import React from "react";

export default function turnTextToMarkDown(value) {
    const results =  value.split(/\n{2,}/);
   console.log(results, 'results');
  
     let newArray = [...results].map(item => {
      let hasHashes = new RegExp(/^#{1,6}\s\b/); 
       
      // turn any strings that start with hashes and ending with space to corresponding h tag
        if(hasHashes.test(item)) {
         return turnHashesToHeadings(item, hasHashes);
        }
       
        return <h4>Hello</h4>; 
  
     });

         return  newArray; 
    
  };





  function turnHashesToHeadings(item, regex) {

    const numOfHashes = String(item.match(regex)[0]).trim().length; 
    const removeHashesStr = item.replace(regex, ''); 

    
  
    switch(numOfHashes) {
      case  1 : {
        return  <HeadingOne type={'h1'} children={removeHashesStr} />
  
      }
      case 2 : {
        return <HeadingOne type={'h2'}  children={removeHashesStr}/>;
      }
  
      case 3 : {
        return <HeadingOne type={'h3'}  children={removeHashesStr}/>;
      }
  
      case 4 : {
        return <HeadingOne type={'h4'}  children={removeHashesStr}/>;
      }
  
      case 5 : {
        return <HeadingOne type={'h5'}  children={removeHashesStr}/>;
      }
  
      case 6 : {
        return <HeadingOne type={'h6'}  children={removeHashesStr}/>;
      }
  
      default: {
        console.log('hello');
      }
    }
    
  
  }