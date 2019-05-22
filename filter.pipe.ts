import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter',
	pure: false,
})
export class FilterPipe implements PipeTransform {
	transform(objectArr:any[], filterObj:{[index:string]:any}): any{
		if(!objectArr) return [];

		//clone the object array to avoid making changes to reference
		let output = JSON.parse(JSON.stringify(objectArr));

		//apply filters to specific columns
		for(let key in filterObj){
			if(key !== '*'){
				if(filterObj[key]){
					output = output.filter(item => item[key].indexOf(filterObj[key]) !== -1);
				}
			}
		}

		//filter on all columns
		if(filterObj['*'] && filterObj['*'] !== ''){
			let masterFilter = filterObj['*'].toUpperCase();
			
			output = output.filter(item => Object.values(item).join(' ').toUpperCase().indexOf(masterFilter) !== -1);
		}
       
       	return output;
	}
} 
