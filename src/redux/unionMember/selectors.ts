import { RootState } from '../store';

export const selectUnionMemberData = (state: RootState) => state.unionMember;

export const selectUnionMemberCurrentPage = (state: RootState) => state.unionMember.currentPage;
