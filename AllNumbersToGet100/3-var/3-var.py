lunghezza = int(input('Qual è la lunghezza delle cifre che devono essere scritte?\n>: '))
for numero in range(10**lunghezza):
	numeroPrint = (lunghezza-len(str(numero)))*'0'+str(numero)
	print( numeroPrint , end=' ' )
	test = True
	contatore1 = 0
	for iterazione1 in range(lunghezza):
		if test == True:
			if numeroPrint[-iterazione1-1] == '9':
				contatore1 = contatore1+1
			else:
				test = False
	if contatore1 == 0:
		print( end='' )
	elif contatore1 == 1:
		print( end='\n' )
	else:
		print( end='\n'*((contatore1-2)*2+2) )
