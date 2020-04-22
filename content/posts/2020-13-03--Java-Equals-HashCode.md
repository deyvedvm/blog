---
title: Java - Equals and HashCode
date: "2020-03-13T01:39:05.944Z"
template: "post"
draft: true
slug: "java-equals-hashcode"
category: "java"
tags:
  - "java"
  - "development"
description: "An example of the importance of Equals and HashCode in Java"
socialImage: "/media/image-2.jpg"
---

The equals() and hashCode() methods are methods defined in the Object class (java.lang.Object). Since Object is the 
parent class of all objects in Java, they are always available.

Their main function is to allow comparison of objects and determine when they are equal. Without these methods the 
solution would be to compare each field of the object.

When these methods are not overridden, Java uses the default implementation. The problem is that the standard 
implementation compares the memory addresses, not the contents of the objects.

The solution is to override the method, but the method contract for that method follows the following rules:

Reflexivity: An object is equal to itself, which means that p1.equals(p1) must return true.


```java

class Person {

    private Integer id;

    private String name;

}

```
