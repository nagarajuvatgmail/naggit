package com.raj;

import java.io.*;

/**
 * 
 * @author NagaRaju
 *
 */
class IODemo
{
	public static void main(String[] args) 
	{
 	  int i=0;short s;
      //first method
      byte barr[]=new byte[5];
	  System.out.println("Enter five digit integer:");
 	  BufferedInputStream in1=new BufferedInputStream(System.in);
      try{ 	 
 	  in1.read(barr);
	       }catch(IOException ioe){} 
      System.out.println("string value="+new String(barr));
	  i=new Integer(new String(barr)).intValue();
	  System.out.println("integer value="+i);
      
     
      //second method 
  	  //char temp='\u0000';
      int temp=0;
	  String str="";
  	  System.out.println("Enter any string:");
	  BufferedReader in=new BufferedReader(new InputStreamReader(System.in));
	  do
	   {
	    //read() returns an int
		//readLine();
     	try{
		temp=in.read();
		   }catch(IOException ioe){}
		str=str+(char)temp;
		}while(temp!=-1);
      System.out.println(str);

      System.out.println("Enter any string:");
      try{
	  System.out.println(in.readLine());	
	     }catch(IOException ioe){}

	}
};
