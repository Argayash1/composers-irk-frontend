import { RootState } from '../store';

export const selectUnionMembersData = (state: RootState) => state.unionMember;

export const selectUnionMembersCurrentPage = (state: RootState) => state.unionMember.currentPage;
