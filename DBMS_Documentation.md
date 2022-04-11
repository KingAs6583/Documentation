# Data Base Mangement System

**Data Base** : It is an organize collection of data for 1 or more purposes

**Data Base Management System** (DBMS) : it is a software which allow to access to the data in a data base
It consist of a set of interrelated data together with set of program to access data  

## Advantages

1. Minimal redundancy

2. Data consistency

3. Data Intergation

4. Data sharing

5. Application Developement Ease

6. Better control

7. Data independance

8. Reduce Maintence

## Disadvantages

1. A complex conceptual design process

2. The need for multiple external database

3. A more complex programmer envirnoment

4. Potentially catastrophic programs not suitable

5. A longer running time for individual applications

6. Highly dependent DBMS operation

**Data model** : It is an integreated collection of concepts for describing and manipulating data , relationships between data and constraints on data

**Data Abstraction** : Hides details of data storage that are not needed by most database user and application

## Categories of data models

1. High level / conceptual data models

* Entity : represents a real world object or concept

* Attribute : represents property of interest that describes an entity such as name or salary

* Relationships : among 2 or more entities , represents an association among 2 or more entities  

2. Low level / physical data models

3. Representational / implementation data models

## Type of data models

* **Hierarchical data model** : It data model organizes data in a tree structure There is hierachy of parent and child data segments

* **Network data model** : It data model which organizes data using 2 fundamental constructs called records and sets  
Record contain fields.  
Set define one to many relationships between records.

* **Relational data model** :It allows you to group its data items into one or more independent tables that can be related to one another by using common fields related to each table

* **Object Oriented data model** : It is a logical organization of real world object(entity) constraints on them and relationship among objects  
it is similar to c++ objects

* **Object Relational data model** : It is design to provide relational database management that allows developer to integrate database with their data types and methods  
It is esswntially a relational mode that allow user to integrate object oriented features  

### Schemas and instances

* **Database schema** : It is an description of the database is called database schema

* **Data instance** : The data in the database at a particular moment time is called snapshot or instance

### Layers of DBMS

1. **External level**

2. **conceptual level**

3. **Internal Level**

* **Mapping** : The processes of transforming request and results betwwen different levels is called mapping

* **Data independence** : The ability to modify a scema definition in one level without affecting schema definition in the next higher level 

* **Physical data independence** : it is the capacity to change the internal schema without having to change conceptual schema

* **Logical data independence** : it is the capacity to change the conceptual schema without having to change in external schema

## Data base Landuages

1. **Data Definition Language** (DDL) : Create, Drop,Truncate and Alter statements

2. **Data Manipulation Language** (DML) : Select, Delete, Insert and Update

3. **Transcation Control Language** (TCL) : Commit, Rollback and Savepoint

4. **Data Control language** (DCL) : Grant and Revoke

## DBMS Interface

* Menu based interface for web clients or browsing

* Forms-based interface

* Graphical user interface (GUI)

* Natural Language interface

* Interface for parametric users

* Interface for DBA

## DBMS Architecture

1. Centralized DBMS

2. Distributed DBMS

3. Client Server Architecture

4. Two tier

5. Three tier

### The design process roughly follows five steps:

1. Requirement collection and analysis

2. Conceptual design

3. Choosing a DBMS

4. Logical design

5. Physical design

6. Implementation

>* **Entity** : It is any object in the system that we want to model and store info for individual

### Type of entity

1. Strong entity

2. Weak entity

>* **Attribute** : It is a property of an entity like data members and function

### There are different types of Attributes are:

(1) Simple Attribute

(2) Composite Attribute

(4) Multi valued Attribute

(3) Single valued Attribute

(5) Stored Attribute

(6) Derived Attribute

(7) Complex Attribute

(8) Null value Attribute

## Relationship Between Entitysets

The Relationship between entity sets are of four types:

1. One-to-One Relationship (1:1)

2. One-to-Many Relationship (1:N)

3. Many-to-One Relationship (M:1)

4. Many-to-Many Relationship (M:N)

### Records and files

* **Records** : it is collection of related data values or items

* **File** : it is a collection of similar records

* sort on base of field and key

## Hashing Techniques

* **Hashing** : it is a process in which we place the each data item at the index of the memory location for the purpose of ease of usability

1. Internal hashing

2. External hashing

3. static hashing

4. Dynamic hashing

5. Extendible hashing

## RELATIONAL MODEL CONSTRAINTS

Constraints are conditions that must hold on all valid relation instances. Some of the Constraints are:

1. **Domain Constraints** :
Domain refers to a set of possible values for each attribute associated with an entity set. Domain constraints in the schema specify an important condition that the user wants each instance of the relation to satisfy

2. **Key Constraints** :
A Key Constraint is a statement that a certain minimal subset of the fields of a relation is a unique identifier for a tuple. Key constraints specify attributes (or) combinations of attributes which must be unique. Primary keys must be unique to allow the key to be use to identify tuples.

3. **Integrity Constraints** :
Integrity Constraints are the set of constructs provided by a data model for specifying conditions that must be satisfied by the data. An Integrity constraint (IC) is a condition specified on a database schema and restricts the data that can be stored in an instance of the database.

4. **Entity Constraints** :
The entity integrity constraint states that no primary key value can be null. This is because the primary key value is used to identify individual tuples in a relation. Having null value for the primary key implies that we cannot identify some tuples. This also specifies that there may not be any duplicate entries in primary key column key row.

5. **Referential Constraints** :
The referential integrity constraint is specified between two relations and is used to maintain the consistency among tuples in the two relations. Informally, the referential

## Basic Terms

* **Simple Key** : A simple key contains a single attribute. Example: Name and Phone No. (Dictator table)

* **Super Key** : An attribute (or) a combination of attribute that is used to identify the records uniquely is known as Super Key. A table can have many Super Keys. Example: DictatorID, Name (Dictator table), MovielD, Title (Movie table).

* **Candidate Key** : An attribute (or) a combination of attribute that identifies the record uniquely but none of its proper subsets can identify the records uniquely. Example: DictatorID, Name and Address (Dictator table).

* **Primary Key** : A unique identification of each row in a table is known as Primary Key.
A Primary Key can consist of one (or) more attributes of a table. Example: DirectorlD (Director table), MovielD. (Movie table).

* **Foreign Key** : A foreign key is an attribute (or) combination of attribute in one base table that points to the candidate key (generally it is the primary key) of another table. The purpose of the foreign key is to ensure referential integrity of the data Example DirectorID (Movies table) references Directors table

* **Composite Key** : A composite key is a key that contains more than one attribute.  
Example: if "Name, Address" as a Primary Key then it will be a Composite Key.

* **Alternate Key** : Alternate Key can be any of the Candidate Keys except for the Primary Key.

* **Secondary Key** : The attributes that are not even the Super Key but can be still used for identification of records (not unique) are known as Secondary Key. Example: Name address Phone No. This values identify the records but it may not identify the values uniquely.

* **Non-Prime Attribute** : A non-prime attribute is an attribute that does not occur in any candidate key. Address would be a non-prime attribute in the Director table.

* **Prime attribute** : A prime attribute, conversely, is an attribute that does occur in some candidate key

* **Weak Entity Set** : An entity set that does not possess sufficient attributes to form a primary key is called a weak entity set.

* **Strong Entity Set**: One that does have a primary key is called a strong entity set.

* **Data Anomalies** : There are problem in relation that occur due to redundancy in relation

1. Inseration Anomalies

2. Delection Anomalies

3. Modification Anomalies

* **Relational Model** :
The relational model represents a database model as a collection of relations. Each relation resembles a table of values.

* **Domain** :
A domain is defined as the set of all unique values permitted for an attribute. OR A domain is referred to in a relation schema by the domain name and has a set of associated values.

* **Attributes** :
Each column in a relation is called an attribute. The attributes are the column headings in the table.

* **Tuples** :
A tuple is a each row in a relation and no two two tuples are unique in a relation

* **Relations** :
A Relation is a table of values, each row in the table represents a collection of related values. In relational terminology each row is called a tuple and each column is called attribute.

* **Relation Schema and Relation Instance** :
A relation consists of a relation schema and a relation instance. The relation instance is a table, and the relation schema describes the column heads for the table.  
The schema specifies the relation's name, the name of each field (or column, or attribute), and the domain of each field
