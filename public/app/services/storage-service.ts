export class StorageService {
	constructor() {
		
	}
	
	init() {
		localforage.setDriver(localforage.LOCALSTORAGE);
	}
	
	save(itemName: string, item: any) {
		localforage.setItem(itemName, item, (err, value) => {
			if(err) {
				console.log(err);
			}
			else {
				//do nothing cause it worked
			}
		});
	}
}