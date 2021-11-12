interface Builder {
  buildFoundation(): void;
  buildWalls(): void;
  buildRoof(): void;
  paint(): void;
  placeExpensiveDoors(): void;
  placeExpensiveWindows(): void;
}

class HouseBuilder implements Builder {
  private house: DefaultHouse;

  constructor() {
    this.start();
  }

  public start(): void {
    this.house = new DefaultHouse();
  }

  public buildFoundation(): void {
    this.house.parts.push('Concrete');
  }

  public buildWalls(): void {
    this.house.parts.push('Bricks');
  }

  public buildRoof(): void {
    this.house.parts.push('Tiles');
  }

  public paint(): void {
    this.house.parts.push('Painting');
  }

  public placeExpensiveDoors(): void {
    this.house.parts.push('Expensive doors')
  }

  public placeExpensiveWindows(): void {
    this.house.parts.push('Expensive windows');
  }

  public getHouseBuilt(): DefaultHouse {
    const result = this.house;
    this.start();
    return result;
  }
}

class DefaultHouse {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`House parts: ${this.parts.join(', ')}\n`);
  }
}


class Engineer {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableHouse(): void {
    this.builder.buildFoundation();
    this.builder.buildWalls();
    this.builder.buildRoof();
  }

  public buildFullFeaturedHouse(): void {
    this.builder.buildFoundation();
    this.builder.buildWalls();
    this.builder.buildRoof();
    this.builder.placeExpensiveDoors();
    this.builder.placeExpensiveWindows();
    this.builder.paint();
  }
}

function clientCode(engineer: Engineer) {
  const builder = new HouseBuilder();
  engineer.setBuilder(builder);

  console.log('Standard basic house:');
  engineer.buildMinimalViableHouse();
  builder.getHouseBuilt().listParts();

  console.log('Standard full featured house:');
  engineer.buildFullFeaturedHouse();
  builder.getHouseBuilt().listParts();

  // Remember, the Builder pattern can be used without a Engineer class.
  console.log('Custom house:');
  builder.buildFoundation();
  builder.buildRoof();
  builder.getHouseBuilt().listParts();
}

const assignedEngineer = new Engineer();
clientCode(assignedEngineer);
