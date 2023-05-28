







export function parseNestedObject(obj: any): any {

    const root: any = {};
    let parsed: any = root;
    const parser: [any, any][]  = [[obj, parsed]];

    for (const [node, parentObject] of parser) {

        for (let key in node) {

            const value = node[key];

            if (typeof value === 'object' && value !== null) {

                parentObject[key] = value === 'object' ? {} : [];

                parser.push([value, parentObject[key]]);

                continue;

            }

            if (!isNaN(Number(value))) {
                parentObject[key] = Number(value);
                continue;
            } else if (value.toLowerCase() === 'true' || value.toLowerCase() === 'false') {
                parentObject[key] = value.toLowerCase() === 'true';
                continue;

            }

            parentObject[key] = value

        }

    }
    return root;

}





