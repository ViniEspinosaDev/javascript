/*
javascript

single thread
no-blocking: não trava o contexto da execução
asynchronous: por ser no-blocking precisa utilizar um paradigma assíncrono para lidar com a execução das coisas
concurrent: as tarefas que executam assíncronamente concorrem uma com as outras pelo processamento

o js possui um modelo de concorrência baseado em um event loop responsável por gerenciar a execução
de código assíncrono e evento em um único thread, permitindo que o js seja não bloqueante

call stack (pilha das funções em execução)
callback queue (fila que armazena callbacks e eventos que aguardam para serem processados)
Event loop: monitora a pilha de call stack e call back. Se houver, um callback é removido da fila e colocado na pilha de chamada
de execução

Fila de callback:
- micro e macro tasks
- microtask: alta prioridade (temporizadores e promises)
- macrotask: menor prioridade, callback de eventos, settimeout e set interval
*/

// (1º) Executa o código de forma síncrona e o valor 1 é impresso imediatamente no console
console.log(1)

// (3º) Microtasks são executadas antes de temporazidaores e promisses
queueMicrotask(() => {
   console.log(2)
})

// (5º Macrotask que aguarda o evento de temporizador ser acionado)
setTimeout(() => {
   console.log(3)
}, 1000)

// (2º) Execução síncrona.
console.log(4)

// (4º) Adiciona uma microtask (promise)
Promise.resolve(true).then(() => {
   console.log(5)
})