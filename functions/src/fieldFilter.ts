import * as admin from 'firebase-admin';

import { Change, EventContext } from 'firebase-functions';
import { isEqual } from 'lodash';
import DocumentSnapshot = admin.firestore.DocumentSnapshot;
import FieldPath = admin.firestore.FieldPath;

const isEquivalent = (before: any, after: any) => {
  return before && typeof before.isEqual === 'function'
    ? before.isEqual(after)
    : isEqual(before, after);
};

const conditions = {
  CHANGED: (fieldBefore: any, fieldAfter: any) =>
    fieldBefore !== undefined &&
    fieldAfter !== undefined &&
    !isEquivalent(fieldBefore, fieldAfter),

  ADDED: (fieldBefore: any, fieldAfter: any) =>
    fieldBefore === undefined && fieldAfter,

  REMOVED: (fieldBefore: any, fieldAfter: any) =>
    fieldBefore && fieldAfter === undefined,
};

const field = (
  fieldPath: string | FieldPath,
  operation: 'ADDED' | 'REMOVED' | 'CHANGED',
  handler: (
    change: Change<DocumentSnapshot>,
    context: EventContext,
  ) => PromiseLike<any> | any,
) => {
  return function(change: Change<DocumentSnapshot>, context: EventContext) {
    const fieldBefore = change.before.get(fieldPath);
    const fieldAfter = change.after.get(fieldPath);
    return conditions[operation](fieldBefore, fieldAfter)
      ? handler(change, context)
      : Promise.resolve();
  };
};

export default field;