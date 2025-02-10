module.exports = {
  apps: [
    {
      name: "app1",
      script: "./app.js",
      watch: true,
      instances: 10, // Rotaciona até 10 instâncias
      exec_mode: "cluster", // Modo cluster para múltiplas instâncias
      max_restarts: 10, // Máximo de reinícios em caso de falha
      restart_delay: 5000, // Atraso de 5 segundos entre reinícios
    },
    
    // Adicione mais aplicativos conforme necessário
  ],
};
