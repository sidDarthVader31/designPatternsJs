/**
 * Singleton design pattern
 * 
 **/

class Logger{

	constructor(){
		this.counter=0;
	}

	logError(e){
	console.log(`error number :${this.counter}: error:${e}`);
		this.counter++;
	}
}

module.exports=new Logger();
