export default interface Builder {
  buildFoundation(): void;
  buildWalls(): void;
  buildRoof(): void;
  paint(): void;
  placeExpensiveDoors(): void;
  placeExpensiveWindows(): void;
}