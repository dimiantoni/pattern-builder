export default class DefaultHouse {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`House parts: ${this.parts.join(', ')}\n`);
  }
}