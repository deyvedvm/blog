---
title: Java - Equals and HashCode
date: "2020-05-11T01:39:05.944Z"
template: "post"
draft: false
slug: "java-equals-hashcode"
category: "java"
tags:
  - "java"
  - "development"
description: "Um exemplo da importância do Equals e HashCode no Java"
socialImage: "/media/java.jpg"
---

Os métodos equals () e hashCode () são métodos definidos na classe Object (java.lang.Object). Como Object é o
classe pai de todos os objetos em Java, eles estão sempre disponíveis.

Sua principal função é permitir a comparação de objetos e determinar quando são iguais. Sem esses métodos, o
A solução seria comparar cada campo do objeto.

Quando esses métodos não são sobrescritos, o Java usa a implementação padrão. O problema é que a implementação compara 
os endereços de memória, não o conteúdo dos objetos.

```jsp

    public class Person {

        private final Integer id;

        private final String name;

        public Person(Integer id, String name) {
            this.id = id;
            this.name = name;
        }
    }

```

```jsp

    Person person = new Person(1, "Senna");
    Person samePerson = new Person(1, "Senna");

    System.out.println("Person: " + person + " HashCode: " + person.hashCode());
    System.out.println("Person: " + samePerson + " HashCode: " + samePerson.hashCode());

    System.out.println("Are Equals?: " + person.equals(samePerson));

```

```bash

    Person: Person(id=1, name=Senna) HashCode: 2001049719
    Person: Person(id=1, name=Senna) HashCode: 1096979270
    Are Equals?: false

```

A solução é sobrescrever o método, mas essa sobrescrita deve seguir as seguintes regras:

- Reflexividade: Um objeto é igual a si mesmo, o que significa que p1.equals(p1) deve retornar verdadeiro.

- Simetria: p1.equals(p2) deve retornar o mesmo resultado (verdadeiro / falso) que p2.equals (p1)

- Transitivo: Se p1.equals (p2) e p2.equals(p3), então também p1.equals (p3).

- Consistente: Dois objetos iguais devem permanecer iguais o tempo todo, a menos que um deles seja alterado.

- Nulo retorna falso: Todos os objetos devem ser diferentes de nulos.

Então o contrato do método equals () da classe Person pode ser reescrito da seguinte maneira:

```jsp

    @Override
    public boolean equals(Object obj) {

        if (this == obj) {
            return true;
        }

        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }

        final Person other = (Person) obj;
        if (!this.id.equals(other.id)) {
            return false;
        }

        return Objects.equals(this.name, other.name);
    }

```

Agora executando o teste de igualdade novamente:

```bash

    Are Equals?: true

```

Parece que o problema foi solucionado, mas se adicionarmos os dois objetos a uma Collection feremos outro problema:

```jsp

    Set<Person> persons = new HashSet<>();
    persons.add(person);
    persons.add(samePerson);

    System.out.println("Person: " + person + " HashCode: " + person.hashCode());
    System.out.println("Person: " + samePerson + " HashCode: " + samePerson.hashCode());
    System.out.println("Set size: " + persons.size());
    System.out.println("Set contains: Senna: " + persons.contains(new Person(1, "Senna")));

```

Conforme a definição anterior person e samePerson são iguais; portanto, o tamanho do HashSet deveria ser 1, e não 2. 
Além disso, deveria conter Senna também. 

Isso ocorre pois numa coleção o Java confere o HashCode que foi criado ao instaciar um objeto para acelerar as buscas. 
Então não basta sobrescrever o equals(), somos obrigados a também sobrescrever o hashCode, obedecendo as 
seguintes regras:

- Dois objetos devem retornar o mesmo hash code.
- Se o objeto não foi alterado o hash code dever ser o mesmo
- Quanto o método equal() sobrescrito obrigatóriamente o médoto hashCode() deve ser sobrescrito, e vice versa.
- Use o mesmo identificado nos dois métodos e na mesma ordem. 

```jsp

    @Override
    public int hashCode() {

        int hash = 7;
        hash = 79 * hash + this.id;
        hash = 79 * hash + Objects.hashCode(this.name);

        return hash;
    }

```

Agora ao executar novamente veremos que o hashCode é o mesmo e agora a coleção tem apenas um item sem duplicação.

```jsp

    Person: Person(id=1, name=Senna) HashCode: 79814117
    Person: Person(id=1, name=Senna) HashCode: 79814117
    Set size: 1
    Set contains: Senna: true

```




`


`


 


