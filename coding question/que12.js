//How are duplicate characters found in a string?



function findDuplicate(str, N)
{

	
	let first = 0;
	

	let second = 0;
	
	
	for(let i = 0; i < N; i++)
	{
		
		
		if ((first & (1 << (str[i].charCodeAt() -
							'a'.charCodeAt()))) != 0)
		{
		
			
			second = second | (1 << (str[i].charCodeAt() -
										'a'.charCodeAt()));
		}
		else
		{
			
			first = first | (1 << (str[i].charCodeAt() -
									'a'.charCodeAt()));
		}
	}
	
	
	for(let i = 0; i < 26; i++)
	{
		
		
		if (((first & (1 << i)) &
			(second & (1 << i))) != 0)
		{
			document.write(String.fromCharCode(
				i + 'a'.charCodeAt()) + " ");
		}
	}
}


let str = "geeksforgeeks";
let N = str.length;

findDuplicate(str, N);



