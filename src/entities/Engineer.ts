import Builder from "../interfaces/Builder";

export class Engineer {
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