/**
 * Um código simples pra fazer uma lasanha
 * que ilustra bem o conceito do pattern Builder 
 */

class Lasagna {
  prepare: string[] = []
}

interface IBuilder {
  addDoughLayer(): this
  addSauceLayer(): this
  addHamLayer(): this
  addCheeseLayer(): this
  repeatPreviousSteps(): this
  toBakeTheLasagna(): this
}

class LasagnaRecipe implements IBuilder {

  private lasagna: Lasagna

  constructor() {
    this.prepare()
  }

  addDoughLayer() {
    this.lasagna.prepare.push('Adicione uma camada da massa de lasanha')
    return this
  }

  addSauceLayer() {
    this.lasagna.prepare.push('Adicione uma camada de molho bolonhesa')
    return this
  }

  addHamLayer() {
    this.lasagna.prepare.push('adicione uma camada generosa de presunto')
    return this
  }

  addCheeseLayer() {
    this.lasagna.prepare.push('adicione uma camada mais generosa ainda de queijo')
    return this
  }

  repeatPreviousSteps() {
    this.lasagna.prepare.push('Repita os passos anteriores para ficar muito melhor o/')
    return this
  }

  toBakeTheLasagna() {
    this.lasagna.prepare.push('Leve ao forno em 220 graus por 40 minutos')
    return this
  }

  getLasagna() {
    return this.lasagna
  }

  public prepare(): void {
    this.lasagna = new Lasagna();
  }
}

class MasterChef {
  // The MasterChef class building a complex representation of lasagna

  private builder: LasagnaRecipe;

  public setBuilder(builder: LasagnaRecipe): void {
    this.builder = builder;
  }

  public prepareSimpleLasagnare(): void {
    this.builder.addDoughLayer()
      .addHamLayer()
      .addSauceLayer()
      .addCheeseLayer()
      .toBakeTheLasagna()
      .getLasagna()
  }

  public prepareLasagnaForPeopleLikeMe(): void {
    this.builder.getLasagna().prepare = []
    this.builder.addDoughLayer()
      .addHamLayer()
      .addSauceLayer()
      .addCheeseLayer()
      .repeatPreviousSteps()
      .toBakeTheLasagna()
      .getLasagna()
  }
}

function orderDish(
  chef: MasterChef, 
  lasagnaRecipe: LasagnaRecipe
) {
  
  const builder = lasagnaRecipe;
  chef.setBuilder(builder);

  console.log('Prepara uma lasanha para pessoas normais');
  chef.prepareSimpleLasagnare();
  console.log(builder.getLasagna().prepare);

  console.log('Prepara uma lasanha para gente como eu (Não entendam gordo!)');
  chef.prepareLasagnaForPeopleLikeMe();
  console.log(builder.getLasagna().prepare);

  console.log('40 minutos depois lasanha na mesa... Bon appétit!!')

}

// Make Order dish
const masterChef = new MasterChef();
const lasagnaRecipe = new LasagnaRecipe();
orderDish(masterChef, lasagnaRecipe);