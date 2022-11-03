const { gravarDados, buscaDados, buscaTodosDados } = require("./database.local");

test("Gravar dados no banco", () => {
    //cenário
    const esperado = true;
    
    //execução
    const resultado = gravarDados([{
        codigo: 1,
        nome: "Teste",
        endereco: "Rua 1",
    }]);
    
    //validação
    expect(resultado).toBe(esperado);
    }
);

test("Buscar dados no banco", () => {
    //cenário
    const esperado = [{
        codigo: 1,
        nome: "Teste",
        endereco: "Rua 1",
    }];
    
    //execução
    const resultado = buscaDados("myKey");
    
    //validação
    expect(resultado).toEqual(esperado);
    }
);

test("Buscar todos os dados no banco", () => {
    //cenário
    const esperado = [{
        codigo: 1,
        nome: "Teste",
        endereco: "Rua 1",
    }]
    
    //execução
    const resultado = buscaTodosDados();
    
    //validação
    expect(resultado).toEqual(esperado);
    }
);