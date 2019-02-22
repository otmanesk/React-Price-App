const getClasses = (origin, added) =>{
    let classes = [];
    if (origin) {
		if (origin.constructor === Array) {
			classes = [...classes, ...origin];
		} else {
			classes.push(origin)
		}
	}
	if (added) {
		if (added.constructor === Array) {
			classes = [...classes, ...added];
		} else {
			classes.push(added);
		}
	}
	return classes.join(' ');
}
	

export default getClasses;