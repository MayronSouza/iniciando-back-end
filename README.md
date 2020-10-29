# Recuperação de senha

**Requisitos Funcionais**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos Não Funcionais**

- Utilizar o Mailtrap para testar envios em ambiente de Dev;
- Utilizar Amazon SES para envios em produção;
- O envio  de e-mails  deve acontecer em segundo plano (backdround job);

**Regras de Negócio**

- O link  enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetá-la;

# Atualização do Perfil

**Requisitos Funcionais**

- O usuário deve poder atualizar seu nome, e-mail e senha;

**Regras de Negócio**

- O usuário não pode  alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a senha novo;

# Agendamento de serviços

**Requisitos Funcionais**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário desponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos Não Funcionais**

- a listagem de prestadores deve ser armazenada em cache;

**Regras de Negócio**

- Os agendamentos devem estar disponíveis entre 8h e 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar um horário que já passou;
- O usuário não pode agendar serviço consigo mesmo;
- Cada agendamento deve durar 1h exatamente;
- O usuário não pode agendar um horário já ocupado

# Painel do Prestador

**Requisitos Funcionais**

- O usuário deve poder listar seus agendamentos de um dia  específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualzar as notificações não lidas;

**Requisitos Não Funcionais**

- Os agendamentos do prestador no dia deve ser armazenado no cache;
- As notficaçõs do prestador devem ser armazenadas no MogoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**Regras de Negócio**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;
