# Structure Query Language (SQL)

* **Relational Data Base Management System** (RDBMS) : It may be a data base which store in form of tablesand the relationship among the data is also stored in form of tables
Example : SQL

## Basic Terms in RDBMS

1. **Tuple/Row** : A single row in the table

2. **Attribute/Column** : A column stores an attribute of the entity  
Column is also called Fields

3. **Column Name**

4. **Table Name:**

5. **Relation** : it appear as 2 dimensional table

6. **Primary key** : it is an unique key it doesn't have duplicate

7. **Composite Key** : in some table asingle column cannot be used to uiquely in that casewe hsve 2or more columns
When a primary key contains 2 or more columns

8. **Foreign Key** : Primary key of other table

## Vendors of RDBMS

1. Computer Associates : INGRES

2. IBM : DB2

3. INFORMIX : INFORMIX

4. Oracle : ORACLE

5. Microsoft : MS ACCESS, SQL SERVER

6. Mysql AB : MYSQL

7. postgreSQL : POSTGRESQL

8. Sybase : SYBASE 11

## Data Types in SQL

1. **CHAR [( size[byte | Char])]** : Max 2000 Min 1 bytes It is like character  
Example : employee_id char(5);

2. **VARCHAR2** : It is like string Max 4000 Min 1 bytes  
Example : employee_name Varchar2(50);

3. **Number[( precision[,scale])]** : p range 1 to 38 ,s range -87 to 127  
Example : employee_salary Number(6,2);

4. **DATE** : Max 7 bytes  
Example : employee_dob Date;

5. **TIMESTAMP [(fractional_section)]** : Min 7 to 11 bytes  
Example : time_zone Timestamp;

6. **INTERVAL YEAR[(year_precision)] TO MONTH** :  
Example : column1 Interval year (3) to month

7. **ROWID** : base 64 string representing the unique address of a row in its table  
Example : column2 rowid;

8. **CLOB** : A char large object containing single or Multibytes  
Example : companydata clob;

9. **BLOB** : A binary large object  
Example : imagedate blob;

## Type of sql strnts

1. **Data Definition Language** (DDL) : Create, Drop,Truncate and Alter statements

2. **Data Manipulation Language** (DML) : Select, Delete, Insert and Update

3. **Transcation Control Language** (TCL) : Commit, Rollback and Savepoint

4. **Data Control language** (DCL) : Grant and Revoke

## Data Defination Language

1. **Create** : This Keywoard is use to create a table  
Syntax  
CREATE TABLE Table_Name (  
Column_name1 datatype [column_constraint],
Column_name2 datatype [column_constraint],
Column_name3 datatype [column_constraint],  
);  

```sql
CREATE TABLE departments(
    department_id number(10) NOT NULL,
    department_name VARCHAR2(50) NOT NULL,
    CONSTRAINT departments_pk PRIMARY KEY (department_id)    
);

CREATE TABLE Employees(
    employee_number number(10) not null,
    employee_name varchar2(50) not null,
    salary number(6),
    CONSTRAINT employees_pk PRIMARY KEY (Employee_number),
    CONSTRAINT fk_departments FOREIGN KEY (department_id) REFERENCE departments(department_id)
);
```

* **Decribe command** : this is use to display table  
Syntax :  
DESCRIBE<table_name> or DESC<table_nambe>

2. **ALTER** : This cmd is use to rename add new column modify existing and to add new integrity constraint and can also drap column  
Syntax :  
ALTER TABLE table_name
{ADD | MODIFY (COL_NAME datatype[,COL_NAME datatype])}  
{DROP CONSTRAINT contraint_name}  
{ADD CONSTRAINT contraint_name CONSTRAINT TYPE col_name [REFERENCES table_name(col_name)]}  
{RENAME TO new_table_name}

```sql
ALTER TABLE suppliers RENAME TO distributors; //rename
ALTER TABLE distributor ADD cantact_no NUMBER(10);//ADD ROW
ALTER TABLE distributors MODIFY supplier_name VARCHAR2(100);//modifying 
ALTER TABLE distrubutors DROP COLUMN supplier_name; //removing column
ALTER TABLE distributors RENAME COLUMN cantact_no to contact_person;
ALTER TABLE distrubutors ADD CONSTRAINT supplier_pk PRIMARY KEY(supplier_id);
```

3. **Drop** : removes table from database  
Syntax :  
DROP TABLE Table_name;

4. **TRUNCATE** : This delete all rows from database  
Syntax :  
TRUNCATE TABLE Table_name;  
**Note** : it is similar to delete but not same delete remove particular row only

### Constraints

1. **NOT NULL** : Ensure that a column cannot have null value

2. **DEFAULT** : Provides a default value for a column when none is specified while inserting

3. **UNIQUE** : Ensure that all values in column are different

4. **CHECK** : Makes sure that all values in column satisfy certain criteria

5. **PRIMARY KEY** : used to uniquely identify a row

6. **FOREIGN KEY** : used to ensure referential integrity of the data

```sql
CREATE TABLE supplier (
    supplier_id number(10) NOT NULL,
    min_item number(10) DEFAULT 5,
    supplier_contact number(10) UNIQUE,
    Amount number(10) CHECK(Amount>100),
    CONSTRAINT supplier_id_PK PRIMARY KEY(supplier)
);

CREATE TABLE orders (
    order_id Number(6) NOT NULL,
    CONSTRAINT ORDERS_FK FOREIGN KEY (supplier_id) REFERENCES supplier(supplier_id)
);
```

## Data Manipulation Language

1. **SELECT** : this use to access the data from table  
Syntax :  
SELETE * FROM TABLE_NAME; //to display all contain  
OR  
SELETE Column1,column2,..FROM Table_Name;// show columns

2. **INSERT** : this is use to add elements into rows  
Syntax :  
INSERT INTO table [(column,column)]  {Values(values[value]..) | query }

3. **UPDATE** : this is use change the data of table  
Syntax :  
UPDATE <table_name> SET <col_name1> = value1,<col_name2>, .. WHERE condition ;

4. **DELETE** : this is use to remove particular item from table  
Syntax  :  
DELETE FROM Table_Name WHERE Condition;  
DELETE FROM Table_Name;  
DELETE * FROM Table_Name;

```sql
Create Table Supplier (
    id NUMBER(5) PRIMARY KEY NOT NULL,
    Name Varchar2(20) NOT NULL,
    Item Varchar2(5) NOT NULL
);

INSERT INTO Supplier (id , Name, Item) Values (111,'hp',laptop);
INSERT INTO Supplier Values (222, 'Lenova' laptop);
SELECT * FROM Supplier;

UPDATE Supplier SET Item = 'laptop';
UPDATE Supplier SET Name = 'wipro' WHERE Name = 'hp';
SELECT * FROM Supplier;

DELETE FROM Supplier Where Name = 'dell';
DELETE FROM Supplier;

SELECT * FROM Supplier;
```

## Transaction Control Language strnt

1. **Commit** : It mean making permanent the changes performed by the sql strnt and visible to other users  
Syntax :  
COMMIT

2. **ROLLBACK** : It mean undoing any changes to data that have been performed by sql strnt within an uncommitted transaction  

* Rollback back of entire transcation
* Rollback back of transaction to a savepoint  
Syntax :  
ROLLBACK

3. **SAVEPOINT** : It is use save transcation which can't be Rollback mean Roll back happens after savepoint  
Syntax :  
SAVEPOINT  

```sql
INSERT INTO Supplier VALUES(111,'HP','LAP');
INSERT INTO Supplier VALUES(222,'DELL','KEY');
COMMIT;

SAVEPOINT MYSAVE;//mysave is user define
INSERT INTO Supplier VALUES(333,'IBM','LAP');
INSERT INTO Supplier VALUES(444,'WIPRO','KEY');
ROLLBACK TO MYSAVE;

SELECT * FROM Supplier;
```

## Data Control Language statements

1. **GRANT** : It mean authorizing one or more users to perform an operations  
Syntax :  
GRANT SELECT , UPDATE ON Supplier TO SCOTT;

2. **REVOKE** : It mean removing grant  
Syntax :  
REVOKE SELECT , UPDATE ON Supplier FROM SCOTT;  

## Querying the DataBase

* **SELECT** :  
SELECT Column_list FROM Table_Name  
[WHERE Condition]  
[GROUP BY Column_Name]  
[HAVING Condition]  
[ORDER BY Expression];  

### Operators Used In SQL

1. Arithmetic Operators : + - / *
2. Comparison Operators : = != <> > >=  
**BETWEEN ..AND .. : Betwwen 2 values  
NOT BETWEEN ..AND .. : Not between 2 values  
IN (LIST) : Equal to any 1 of the values in the list  
NOT IN (LIST) :  
IS NULL : Is a null value  
IS NOT NULL :  
LIKE : Match a character pettern using wildcard haracters  
NOT LIKE :**  
3. Logical Operators : AND OR NOT  
4. Special Operators :  
**IN : Checking a value in set of values  
BETWEEN : Checking a value within a range  
LIKE : Matching a pattern from a column**  
5. Concatenation operator :  
**|| : concatenates character string and CLOB data  
Syntax :  
SELECT 'Name is' || AUTHOR FROM Book;**  

```sql
SELECT TITLE,AUTHOR,PRICE FROM BOOK WHERE PRICE > 250;
SELECT TITLE,AUTHOR,PRICE FROM BOOK WHERE PRICE <> 200;
SELECT TITLE,AUTHOR,PRICE FROM BOOK WHERE PUBLISHER = 'SKYWARD' AND AUTHOR = 'MYTHILI';
SELECT BOOK_ID,AUTHOR FROM BOOK WHERE  BOOK_ID IN (1,4,5,9);
SELECT TITLE , PRICE FROM WHERE PRICE BETWEEN 300 AND 400;
SELECT * FROM SUPPLIER WHERE CONTACT_NUMBER IS NULL;
SELECT TITLE || 'BY' || AUTHOR "NEW TITLE" FROM BOOK;
```

6. Like Operator :  
Syntax :  
SELECT Column_Name(s) FROM Table_Name WHERE Column_Name LIKE pattern;  

* % : A substitute for zero or more character  
* _ : A substitute for exactly one character
* [charlist] : Any single character in charlist  
* [^charlist] or [!charlist] : Any single character not in charlist  

* **DISTINCT** : It return unique values  
Syntax :  
SELECT DISTINCT Column_Name FROM Table_Name WHERE Condition;

```sql
SELECT * FROM BOOK WHERE PUBLISHER LIKE 'S%';
SELECT * FROM BOOK WHERE PUBLISHER LIKE '%D%';
SELECT * FROM BOOK WHERE PUBLISHER LIKE '%IND%';

SELECT DISTINCT PUBLISHER FROM BOOK;
SELECT DISTINCT PUBLISHER,PRICE FROM BOOK;
```

7. Set Operator :  

* UNION : All distinct rows selected by either query
Syntax :  
SELECT Colunm_Name(s) FROM Table_Name_1;
UNION  
SELECT Colunm_Name(s) FROM Table_Name_2;  

* UNION ALL : All distinct rows selected by either query , including duplicates  
Syntax :  
SELECT Colunm_Name(s) FROM Table_Name_1;  
UNION ALL  
SELECT Colunm_Name(s) FROM Table_Name_2;  

* INTERSECT : All distinct rows selected by both queries  
Syntax :  
SELECT Colunm_Name(s) FROM Table_Name_1;  
INTERSECT  
SELECT Colunm_Name(s) FROM Table_Name_2;  

* MINUS : All distinct rows selected by first query but not the second  
Syntax :  
SELECT Colunm_Name(s) FROM Table_Name_1;  
MINUS  
SELECT Colunm_Name(s) FROM Table_Name_2;  

* SQL ALIAS :  A Table or column can be given another name by using an alias  
The alias names are temporary names and these temporary names are valid oly for current SELECT strnt  
Syntax :  
Table Alias : SELECT Column_name(s) FROM Table_Name AS Alias_Name;  
Column Alias : SELECT Column_name AS Alias_Name FROM Table_Name;  

* SQL DUEL TABLE : The dual table is temporary table which contains exactly one column  
SELECT * FROM DUAL;  

## SQL FUNCTION

* Single-Row Function : Function_Name(arg1,arg2);  

### Type of Single Row Function  

* Character Function :  

* LOWER (column | expression) : it is to convert upper to lower case  
Syntax :  
SELECT LOWER(arg) FROM DUAL;  

* UPPER (column | expression) : it is to convert lower to upper case  
Syntax :  
SELECT UPPER(args) FROM DUAL;  

* INITCAP (column | expression) : it use convert first letter to upper case  
Syntax :  
SELECT INITCAP(column | expression) FROM DUAL;

* CANCAT (column1 | expression1, column2 | expression2) : Concatenates the 2 strings  
Syntax :  
SELECT CANCAT (column1 | expression1, column2 | expression2) FROM DUAL;  

* SUBSTR (Column | Expression,m[n]) : Return Specified character from character value starting at character position m,n character long  
Syntax :  
SELECT SUBSTR('STRING', 1,3) FROM DUAL;

* LENGTH (column | expression) : it use get length of string  
Syntax :  
SELECT LENGTH(Column) FROM DUAL;  

* INSTR(Column | Expression, 'string',[m],[n]) : Return the numeric position of a named string optionally we can provide a position m to start searching and the occurrence n of the string m and n default to 1  
Syntax :  
SELECT INSTR('Column',string) FROM DUAL;  

* LPAD(Column | Expression, n, string) : pads the character value right-justified to a total width of n character positions  
RPAD (column | expression , n,string) : pads the character value left-justified to total width of n character position  
Syntax :  
SELECT LPAD (Column,4) FROM DUAL;  

* TRIM(eading | trailing | both, trim_char FROM trim_source) : Enables you to trim heading or trailing character or both from a character string

* REPLACE (Text, search_string, replacement) :  

```sql
SELECT BOOK_ID, CONCAT(TITLE,AUTHOR), LOWER(PUBLISHER) FROM BOOK;
```

* Number Function  

* TRUNC(column | expression,N) : Truncates the column,expression or value to n decimal place or if n is omitted n defaults to zero  
SELECT TRUNC(100.123), TRUNC(100.123,1) FROM DUAL;

* MOD(m,n) : Return the remainder of m divided by n;  
SELECT MOD(100,2) FROM DUAL;

* CEIL(X) : Return the smallest integer greater than or equal to x  

* FLOOR(x) : Return the largest integer less than or equal to x  

* SQRT(x) : return the square root of x  

* Date Function

* SYSDATE  
SELECT SYSDATE FROM DUAL;  

* date + number : Adds a number of days to date  

* date - number : Substract a number of days from a date  

* date - date : Substract one date from another  

* date + num/24 : Adds a number of hours to a date  
Example : SELECT SYSDATE+1 FROM DUAL;  

* MONTHS_BETWEEN(date1,date2) :  
SELECT MONTHS_BETWEEN(date1,date2) FROM DUAL;  

* ADD_MONTHS(date,n) : Add n number of calendar months to date  
SELECT ADD_MONTHS(date,n) FROM DUAL;  

* NEXT_DAY(date,'char') : Finds the date of the next specified day of the week 'char' date  
SELECT NEXT_DAY(date,'char') FROM DUAL;  

* LAST_DAY(date) : finds the date of the last day of the month that contains date  

* ROUND(date[fmt]) : return date rounded to the unit that is specified by the formate  

* TRUNC(date[fmt]) : returns date with the time portion of the day truncated to the unit that is specified by the format model fmt  

* Convert to_char to string  
to_char(value,[formate_mask],[nls_language]);  

* Convert to_number to string  
to_number(string,[formate_mask],[nls_language]);

* Convert to_date to string  
to_date(string,[formate_mask],[nls_language]);  

## Multi-Row Function

### Type of Group Function

* AVG (column)  
* COUNT (column)  
* MAX (column | express)  
* MIN (column | express)
* STDDEV (column | express)
* SUM (column | express)
* VARIANCE (column | express)

Syntax :  
SELECT COLUMN Group_Function(column) FROM TABLE WHERE condition GROUP BY Column ORDER BY column  

Example :  
SELECT MAX(PRICE) ,MIN(PRICE) FROM BOOK WHERE PUBLISHER = 'KING';  

### Order by clause

Syntax :  
SELECT COLUMN FROM TABLE WHERE Condition ORDER BY {colu,expr} [ASC|DESC] ;  

```sql
SELECT * FROM BOOK ORDER BY PUBLISHER ASC;
//ASC MEAN ascending order
```

### Group By Clause

Syntax :  
SELECT Column, function FROM Table  
WHERE condition GROUP BY expression ORDER BY column ;  

### Having By Clause

Syntax :  
SELECT column, function FROM Table  
WHERE Conition GROUP BY expression HAVING BY Expression ORDER BY Column ;  

Example :  

```sql
SELECT PUBLISHER ,MAX(PRICE) FROM BOOK WHERE PUBLISHER NOT IN ('ONE','PUBLIC') GROUP BY PUBLISHER HAVING MAX(PRICE) <= 350 ORDER BY PUBLISHER DESC ;
```

### jOINS

* **Type of joins**

* cross join
* equi join :  
Syntax :  
SELECT Table1.column, Table2.column FROM Table1, Table2 WHERE Table.column = Table2.column ;
* non-equi join :  
Syntax :  
SELECT Table1.column, Table2.column FROM Table1, Table2 WHERE Table.column >= Table2.column ;
* outer join :  
Syntax :  
SELECT Table1.column, Table2.column FROM Table1, Table2 WHERE Table.column (+) = Table2.column ;  
Note : if + in front of table1 it is left join  
if + back of tabe2 it is right join
* sef join :  
Syntax :  
SELECT Table1.column, Table1.column FROM Table1, Table1 WHERE Table1.column = Table1.column ;  

### SUB Queries

Example :  
SELECT EMP_ID,EMP_NAME FROM EMPLOYEE WHERE DEPT_NO = (SELECT DEPT_NO FROM DEPARTMENT WHERE DEPT_NAME = 'SALES') ;  

### CREATE INDEX

CREATE INDEX Index_Name ON Table_Name Column_Name ;  

DROP INDEX Index_Name ;  

### VIEW

CREATE VIEW View_Name AS SELECT Column_Name(s) FROM Table_Name WHERE condition ;  

### Note: Learn about EMBEDDED SQL FROM GOOGLE

<br>

## PL/SQL

* **PL/SQL** : Oracle's procedural language extension to sql  

### Features of PL/SQL

* **Block Structure**
* **Variable and Constants**
* **Control Structure**
* **Exception Handling**
* **Modularity**
* **Cursors**
* **Built-in-function**

#### Block Sturcture

Syntax :  
DECLARE  
    Variable declaration  
BEGIN  
    Program Execution  
EXCEPTION  
    Exception handling  
END;  

#### Comments in pl/sql

* single line comment : --comment  
* multi line comment : /*comment*/  
NOTE : it support all operator which are in c++  

#### Literals / Data type

* **Numeric** : NUMBER, BINARY_INTEGER PL_INTEGER BINARY_FLOAT BINARY_DOUBLE
* **Character** : CHAR VARCHAR2 LONG LONG RUN
* **String** : DATE TIMESTAMP TIMESTAMP WITH TIME ZONE
* **Boolean**

#### Display output

Package DBMS_OUTPUT  
PUT and PUT_LINE  
SET SERVEROUPUT ON  

#### Conditional control

IF THEN, IF THEN ELSE, IF THEN ELSIF  
Syntax :  
IF CONDITION THEN  
    STRNT  
ELSIF CONDITION THEN  
    STRNT  
ELSE  
    STRNT  
END IF;  

#### Iterative control

LOOP END LOOP, WHILE LOOP, FOR LOOP  

Syntax :  
LOOP  
STRNT  
EXIT CONDITION  
END LOOP  

Syntax :  
WHILE CONDITION  
LOOP  
STRNT  
END LOOP  

Syntax :  
FOR VARIBLE IN CONDITION  
LOOP  
STRNT  
END LOOP  

#### Suential control

GOTO NULL

#### Procedures

Syntax :  
CREATE OR REPLACE PRODUCEURE producedure_name (parameter)  
LOCAL DECLARATION  
BEGIN  
STRNT  
EXCEPTION  
HANDLER  
END;  

#### FUNCTION

Syntax :  
CREATE OR REPLACE FUNCTION function_name (parameter) RETURN datatype  
LOCAL DECLARATION  
BEGIN  
STRNT / RETURN VALUE;  
END;  

#### PACKAGE

Declaration  
CREATE OR REPLACE PACKAGE package_name AS type_defination CURSOR item_declaraction Function declaration  

END package_name;  

Body  
CREATE OR REPLACE PACKAGE package_name AS type_defination CURSOR item_declaraction Function declaration  
BEGIN  
STRNT  
END package_name;  

#### EXCEPTION

* system define
* user define

Syntax :  
BEGIN  
STRNT  
RAISE value/exception  
EXCEPTION  
WHEN value/exception THEN  
STRNT  
END;  

#### TRIGGER CREATION

EXAMPLE :  
CREATE OR REPLACE TRIGGER trigger_name BEFORE INSERT OR DELETE OR UPDATE Table_name FOR EACH ROW  
BEGIN  
IF TO_CHAR(SYDATE,'DY') = 'SUN' THEN  
DMS_OUTPUT.PUT_LINE('HOLIDAY');  
ELSE  
DBMS_OUTPUT.PUT_LINE('WELCOME');
END IF;  
END;  

#### CURSORS

Attribute
%NOTFOUND %FOUND %ROWCOUNT %ISOPEN  

Without parameters  
CURSOR cursor_name IS SELECT Column FROM Table_name ;  
With paramets  
CURSOR cursor_name(paramter) IS SELECT Column FROM Table_name ;  
With return  
CURSOR cursor_name RETURN Table$ROWTYPE IS SELECT Column FROM Table_name ;  

OPEN  
OPEN cursor_name;  
FECTCH  
FECTCH cursor_nam INTO variable ;  
CLOSE  
CLOSE cursor_nam;  

Example :  

```sql
SET SERVEROUPUT ON --ON THE OUTPUT

DECLARE  
birthday Date; --DECLARATION
emp_count SMALLINT := 0; --ASSIGNING VALUE
pi REAL := 3.14159; --GLOBAL DECLARATION

BEGIN
weekend VARCHAR2(4) := TO_CHAR(SYSDATE,'DY');--LOCAL DECLARATION

IF weekend = 'SAT' THEN --IF STRNT
DBMS_OUTPUT.PUT_LINE('ENJOY');--output function

ELSIF weekend = 'SUN' THEN
DBMS_OUTPUT.PUT_LINE('ENJOY');

ELSE 
NULL;
EXIT;
END IF;

N NUMBER := 1;
WHILE N<=5 --LOOP STRNT
    LOOP
    DBMS_OUTPUT.PUT_LINE(N);
    N := N + 1;
END LOOP;

FOR N IN 1..5
    LOOP
    DBMS_OUTPUT.PUT_LINE(N);
END LOOP;

CREATE OR REPLACE PROCEDURE proc2 (N1 IN NUMBER,TOT OUT NUMBER) IS
BEGIN 
TOT := N1+N1;
END;

CREATE OR REPLACE FUNCTION FUN1 (S VARCHAR2) RETURN VARCHAR AS
BEGIN
RETURN S;
END;

CREATE OR REPLACE PACKAGE PACK1 AS --DECLARATION OF PACKAGE
PROCEDURE PROC1;
FUNCTION FUN2 RETURN VARCHAR;
END PACK1 ;

CREATE OR REPLACE PACKAGE BODY PACK1 AS --BODY OF PACKAGE
PROCEDURE PROC1 IS
BEGIN
DBMS_OUTPUT.PUTlINE('HI');
END PROC1;
FUNCTION FUN2 RETURN VARCHAR IS
BEGIN
RETURN ('HI KING');
END FUN2;
END PACK1;

EXEC PACK1.PROC1 ;--CALLING

SELECT FROM PACK1.FUN2 FROM DUAL;

CREATE OR REPLACE TRIGGER trigger_name BEFORE INSERT OR DELETE OR UPDATE ON Table_name FOR EACH ROW
BEGIN
IF TO_CHAR(SYSDATE,'DY') = 'SUN' THEN
    DBMS_OUTPUT.PUT_LINE('TODAY IS HOLIDAY');
    END IF;
END;

CURSOR c1  IS SELECT colum,sal FROM table_name;
OPEN c1;

FETCH c1 INTO colum,sal ;
DBMS_OUTPUT.PUT_LINE(column || 'salary is $' || sal );

FETCH c1 INTO colum,sal ;
DBMS_OUTPUT.PUT_LINE(column || 'salary is $' || sal );

CLOSE c1;

IF TO_CHAR(SYSDATE,'DY') = 'SUN' THEN
    RAISE MYEXCEP;
END IF;

EXCEPTION 
WHEN MYEXCEP THEN
    DBMS_OUTPUT.PUT_LINE('NO TRANSCATION TODAY');

END;

```
