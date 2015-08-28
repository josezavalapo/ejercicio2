lista=[3, 4, 5, 6, 1];
pos=lista.length-1;
temp=lista[pos];
i=pos-1;

while(i>=0 && temp<lista[i])
	{
		lista[i+1]=lista[i];
		i--;
		console.log(lista);
	}
lista[i+1]=temp;
console.log(lista);
