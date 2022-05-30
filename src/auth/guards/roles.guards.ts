import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../roles/roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<Role[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return matchRoles(roles, user.roles);
  }
}
function matchRoles(roles: Role[], userRole: string[]): boolean {
  if (roles.some((requestedRole) => userRole?.includes(requestedRole))) {
    return true;
  } else {
    throw new HttpException(
      'You do not have permission to perform this action',
      403,
    );
  }
}
