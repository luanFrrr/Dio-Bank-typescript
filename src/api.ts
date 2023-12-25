const conta = {
  email: "luanrosas@yahoo.com.br",
  password: "123456",
  name: "Luan Ferreira",
  balance: 2000.0,
  id: "1",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
