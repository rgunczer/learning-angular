import { consoleLogFix } from "./console-log-fix";

describe('console-log-fix', () => {
    it('should replace console.log with myAwesome service', () => {

        const input = `
            class MyComponent {
                ngOnInit() {
                    this.foo();
                    console.log('wow hi angular');
                    console.log('angular');
                }
            }`;

        const output = `
            class MyComponent {
                ngOnInit() {
                    this.foo();
                    this.myLog('wow hi angular');
                    this.myLog('angular');
                }
            }`;

        expect(consoleLogFix(input)).toContain(output);
    });
});