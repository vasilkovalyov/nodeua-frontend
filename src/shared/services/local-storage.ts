type ConfirmationType = {
  email: string;
  code: string;
  userId: number | null;
};

class LocalStorageService {
  static emailConfirmationKey = "email-confirmation";
  static userIdKey = "userId";
  static hourMs = 3600000;
  static expireTime = 24 * LocalStorageService.hourMs;

  static emailConfirmation(email: string, userId: number): void {
    const now = new Date();

    const tokenObj = JSON.stringify({
      userId: userId,
      email: email,
      expire: now.getTime() + LocalStorageService.expireTime
    });

    localStorage.setItem(LocalStorageService.emailConfirmationKey, tokenObj);
  }

  static isWaitingConfirmation(): boolean {
    const now = new Date();
    const currentDateTime = now.getTime();

    const tokenObj = localStorage.getItem(LocalStorageService.emailConfirmationKey);
    if (!tokenObj) {
      return false;
    }

    const lcObj = JSON.parse(tokenObj);
    if (lcObj.expire < currentDateTime) {
      LocalStorageService.removeConfirmationInfo();
      return false;
    }

    return true;
  }

  static getConfirmationInfo(): ConfirmationType {
    const tokenObj = localStorage.getItem(LocalStorageService.emailConfirmationKey);
    if (!tokenObj)
      return {
        email: "",
        code: "",
        userId: null
      };

    const { email, code, userId } = JSON.parse(tokenObj);

    return {
      code,
      email,
      userId: parseInt(userId)
    };
  }

  static removeConfirmationInfo(): void {
    localStorage.removeItem(LocalStorageService.emailConfirmationKey);
  }

  static addUserId(id: number): void {
    localStorage.setItem(LocalStorageService.userIdKey, id.toString());
  }

  static getUserId(): number | null {
    const result = localStorage.getItem(LocalStorageService.userIdKey) as number | null;
    if (!result) return null;
    return result;
  }

  static removeUserId(): void {
    localStorage.removeItem(LocalStorageService.userIdKey);
  }
}

export default LocalStorageService;
