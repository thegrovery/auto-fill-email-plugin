# utm-plugin
Standalone UTM sessionization and tracking plugin


UTM LOGGER

NOTES:
-	JS session closes when tab/browser is closed.
-	JS localstorage can be used for semi premanent storage

code example:
```javascript
	var searchParams = new URLSearchParams(window.location.search); //store as var

	if(searchParams.has('sent')){} //true/false
```

UTM Parameter example:
```
https://website.com?utm_source=test&utm_medium=test&utm_campaign=test&utm_term=test&utm_content=test
```

UTM parameters supported:
- utm_source
- utm_medium
- utm_campaign
- utm_term
- utm_content
- utm_state

**Experimental** - utm_state: this variable shows the current state of the UTM parameters, and can have 3 possible values that denote the user's behavior in relation to the UTMs.

This field can be used for basic attribution - if the value is "localStorage", that means the user has left the site and come back to it later.   

Note that this UTM field is non-standard, and therefore will not be picked up automatically by standard analytics.  It must be manually correlated by the analytics expert.

- "url" - The UTM params are present in the URL.  Lasts until the user navigates to a new page.
- "sessionStorage" - The UTM params are present in the user's session.  Lasts until the user closes the tab they're in.
- "localStorage" - The UTM params are present in the user's long-term cookie storage.  Lasts until the user clears their browser cache.
