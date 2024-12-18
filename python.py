# Oppgave 1
tall1 = 8
tall2 = 4
# print (tall1+tall2) 
# print ("Tall1 + Tall2 = ", (tall1+tall2)) 
print (tall1, "+", tall2, "=", (tall1+tall2)) # Den linjen er bedre enn de andre
print (tall1, "-", tall2, "=", (tall1-tall2)) # Den linjen er bedre enn de andre
print (tall1, "*", tall2, "=", (tall1*tall2)) # Den linjen er bedre enn de andre
print (tall1, "/", tall2, "=", (tall1/tall2)) # Den linjen er bedre enn de andre

# Oppgave 2

lengde = 6
bredde = 8
areal = lengde * bredde
print("Arealet av rektangelet er", areal, "kvadratmeter.")

# Oppgave 3
navn = input("Hva er navnet ditt? ")
alder = int(input("Hvor gammel er du? "))

år_til_100 = 100 - alder

print(navn, "du fyller 100 år om", år_til_100, "år.")


# Oppgave 4
tall = 5
if tall > 0:
    print ("Tall", tall, "er et positivt tall")
elif tall < 0:
    print ("Tall", tall, "er et negativt tall")
else:
    print ("Tallet er bare 0")
    
# Oppgave 5
n = int(input("Skriv inn et tall: "))
sum = 0
for i in range(1, n + 1):
    sum += i
print("Summen av tallene fra 1 til", n, "er", sum)

# Oppgave 6
navn1 = input("Skriv inn navn 1: ")
navn2 = input("Skriv inn navn 2: ")
navn3 = input("Skriv inn navn 3: ")
navn4 = input("Skriv inn navn 4: ")
navn5 = input("Skriv inn navn 5: ")
navn_liste = [navn1, navn2, navn3, navn4, navn5]
print("Navnene er:", navn_liste)
