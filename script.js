/**
 * Logic for Relational Algebra Operations
 * Applied to BTS DAI Study Case
 */

function getRelation(id) {
    try {
        const value = document.getElementById(id).value;
        return JSON.parse(value);
    } catch (e) {
        throw new Error(`Syntax Error in ${id}: Check your JSON format.`);
    }
}

function renderTable(data) {
    const container = document.getElementById('resultArea');
    if (!data || data.length === 0) {
        container.innerHTML = "<p>Operation returned an empty set.</p>";
        return;
    }

    const columns = Object.keys(data[0]);
    let html = `<table><thead><tr>${columns.map(c => `<th>${c}</th>`).join('')}</tr></thead><tbody>`;
    
    html += data.map(row => {
        return `<tr>${columns.map(c => `<td>${row[c] || ''}</td>`).join('')}</tr>`;
    }).join('');

    html += `</tbody></table>`;
    container.innerHTML = html;
}

function runOp(op) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.innerHTML = "";

    try {
        const A = getRelation('dataA');
        const B = getRelation('dataB');
        const param = document.getElementById('paramInput').value.trim();
        let result = [];

        switch(op) {
            case 'selection':
                // σ: Filters rows based on a condition
                result = A.filter(row => {
                    const condition = param.replace(/(\w+)/g, 'row.$1');
                    return eval(condition);
                });
                break;

            case 'projection':
                // π: Keeps only specific attributes
                const keys = param.split(',').map(s => s.trim());
                result = A.map(row => {
                    let newRow = {};
                    keys.forEach(k => newRow[k] = row[k]);
                    return newRow;
                });
                break;

            case 'union':
                // ∪: Combined rows from A and B, removing duplicates
                result = [...A];
                B.forEach(bRow => {
                    const exists = A.some(aRow => JSON.stringify(aRow) === JSON.stringify(bRow));
                    if (!exists) result.push(bRow);
                });
                break;

            case 'intersection':
                // ∩: Only rows present in both A and B
                result = A.filter(aRow => 
                    B.some(bRow => JSON.stringify(bRow) === JSON.stringify(aRow))
                );
                break;

            case 'difference':
                // −: Rows in A that are NOT in B
                result = A.filter(aRow => 
                    !B.some(bRow => JSON.stringify(bRow) === JSON.stringify(aRow))
                );
                break;

            case 'product':
                // ×: Every combination of rows from A and B
                A.forEach(a => {
                    B.forEach(b => {
                        result.push({...a, ...b});
                    });
                });
                break;
        }
        renderTable(result);
    } catch (e) {
        errorDiv.innerHTML = `<div class="error"><strong>Error:</strong> ${e.message}</div>`;
    }
}