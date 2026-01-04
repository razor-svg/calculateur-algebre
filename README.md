# calculateur-algebre
Relational Algebra Calculator 🧮 A web-based educational tool (HTML/CSS/JS) for simulating database operations: selection (sigma), projection (pi), union (cup), intersection (cap), difference (-$), and product (times). Ideal for the BTS DAI curriculum to visualize the logical manipulation of data before moving on to SQL.


1. INTRODUCTION
Relational algebra is the theoretical foundation of relational databases (SQL). The goal of this application is to provide an interactive tool for manipulating relationships (tables) through fundamental operations in order to validate the data structure before its physical implementation.

2. Technical Architecture
The application is based on a pure front-end (client-side) architecture, ensuring fast execution without server dependencies.

HTML5: Interface structure (input fields, controls, and display).

CSS3: Modern "Dark Mode" style styling for a developer-friendly visual experience.

JavaScript (ES6+): Logical engine managing data parsing, relational algorithms, and dynamic DOM updates.

3. Analysis of Implemented Operations
A. Unary Operations (on a single table) Selection ($\sigma$): Filters the n-tuples (rows) that satisfy a logical predicate. Implementation: Uses the .filter() method. Projection ($\pi$): Reduces the relation schema to a subset of attributes (columns). Implementation: Uses .map() to reconstruct objects with the selected keys.

B. Binary Operations (on two tables) Union ($\cup$): Merges two relations of the same schema, eliminating duplicates. Intersection ($\cap$): Extracts the tuples common to both relations. Difference ($-$): Extracts the tuples present in the first relation but not in the second. Cartesian Product ($\times$): Combines each row of Relation A with each row of Relation B.

4. Logical Design Choices
Data Format: The JSON format was chosen for input because it natively represents structured objects, thus facilitating the transition between the interface and the JavaScript calculation engine.

Integrity Management: For set operations (Union, Intersection), the program compares objects by "serialization" (JSON.stringify) to ensure that even objects identical in value but different in memory reference are correctly identified as duplicates.
