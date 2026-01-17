interface IUser {
  getUser(id: string): string | null;
}

class LoggerDecorator implements IUser {
  constructor(private useCaseUser: IUser) {}
  getUser(id: string): string | null {
    console.log(`Logger user: {${id}}`);
    const result = this.useCaseUser.getUser(id);
    return result;
  }
}

class AuditDecorator implements IUser {
  constructor(private useCaseUser: IUser) {}
  getUser(id: string): string | null {
    console.log(`Audit user: {${id}}`);
    const result = this.useCaseUser.getUser(id);
    return result;
  }
}

class UserService implements IUser {
  getUser(id: string): string | null {
    return "Bro" + id;
  }
}

class UserManagement {
  getUser(id: string): string | null {
    const user = new UserService();
    const loggerDecorator = new LoggerDecorator(user);
    const auditDecorator = new AuditDecorator(loggerDecorator);
    return auditDecorator.getUser(id);
  }
}
