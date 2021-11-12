import DefaultHouse from '../entities/DefaultHouse'
import Builder from '../interfaces/Builder'

class HouseBuilder implements Builder {
  private house: DefaultHouse

  constructor() {
    this.start()
  }

  public start(): void {
    this.house = new DefaultHouse()
  }

  public buildFoundation(): void {
    this.house.parts.push('Concrete')
  }

  public buildWalls(): void {
    this.house.parts.push('Bricks')
  }

  public buildRoof(): void {
    this.house.parts.push('Tiles')
  }

  public paint(): void {
    this.house.parts.push('Painting')
  }

  public placeExpensiveDoors(): void {
    this.house.parts.push('Expensive doors')
  }

  public placeExpensiveWindows(): void {
    this.house.parts.push('Expensive windows')
  }

  public getHouseBuilt(): DefaultHouse {
    const result = this.house
    this.start()
    return result
  }
}

export default HouseBuilder