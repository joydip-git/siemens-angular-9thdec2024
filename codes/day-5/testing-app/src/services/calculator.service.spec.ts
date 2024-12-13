import { CalculatorService } from "./calculator.service"

describe(
    'CalculatorSeviceTest',
    () => {

        let svc: CalculatorService | null;
        beforeEach(
            () => {
                //arrange
                svc = new CalculatorService()
            }
        )

        afterEach(
            () => {
                svc = null
            }
        )

        it(
            '#testing add with inputs: 2 and 2, expecting 4',
            () => {
                //arrange
                // const svc = new CalculatorService()

                //act
                const actual = svc?.add(2, 2)

                //assert
                expect(actual).toEqual(4)
            }
        )
        it(
            '#testing subtract with inputs: 2 and 2, expecting 0',
            () => {
                //arrange
                //const svc = new CalculatorService()

                //act
                const actual = svc?.subtract(2, 2)

                //assert
                expect(actual).toEqual(0)
            }
        )

    }
)