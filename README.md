# Builder

O Padrão Builder permite a construção de objetos complexos sendo muito útil quando um objeto pode possuir muitas opções possíveis de configuração

Diferente de outros padrões de criação, o Builder não exige que os produtos tenham uma interface comum, o que torna possível produzir produtos diferentes usando o mesmo processo de construção.

Em outras palavras ele permite que através de sua classe principal seja possível desencadear uma sequência de chamadas para métodos e outras classes que entre si colaboram para atingir um objetivo que dependa de múltiplas ações ou entidades para produzir resultados diferentes.

Isso significa que a viabilidade de implementação do pattern builder se justifica quando há uma complexidade de representação de casos de uso de objetos em um sistema. 

Algumas características do padrão builder:

O padrão Builder pode ser reconhecido na classe que possui um único método de criação e vários métodos para configurar o objeto resultante. Os métodos do Builder geralmente suportam encadeamento