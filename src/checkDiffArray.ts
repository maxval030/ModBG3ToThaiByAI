import { diff, type DiffData } from "fast-array-diff";



export const checkDiffArray = <T,U = T>(arr1:  T[], arr2:  U[], compareFunc?: (ia: T, ib: U) => boolean):DiffData<T, U> => {
   

  const diffResult = diff(arr1, arr2, compareFunc);

//   const a1 = [  {
//     _id: '67f4313ade8146b6d6d0e30c',
//     content: {
//       contentuid: "h0006a9ecg23c2g4b09gab55g242d522938d4",
//       version: "2",
//       content: "*Yet the tadpole is in the dark too. Dozens of them, crawling towards you as a mind flayer held your skull in its psionic grip.*",
//     },
//   },
//   {
//     _id: '67f4313ade8146b6d6d0e30d',
//     content: {
//       contentuid: "h00071b82ga747g4f61g9ca1g5766c470bab3",
//       version: "3",
//       content: "Something's buried in the dirt. Is that a &lt;i&gt;femur?&lt;/i&gt;",
//     },
//   }]

//   const a2 = [  {
//     _id: '67f4313ade8111146b6d6d0e30c',
//     content: {
//       contentuid: "h0006a9ecg23c2g4b09gab55g242d522938d4",
//       version: "2",
//       content: "*Yet the tadpole is in the dark too. Dozens of them, crawling towards you as a mind flayer held your skull in its psionic grip.*",
//     },
//   },
//   {
//     _id: '67f4313ade8146b6d6d0e30d',
//     content: {
//       contentuid: "h00071b82ga747g4f61g9ca1g5766c470bab3",
//       version: "3",
//       content: "Something's buried in the dirt. Is that a &lt;i&gt;femur?&lt;/i&gt;",
//     },
//   }, {
//     _id: '67f4313ade8146b6d611111d0e30d',
//     content: {
//       contentuid: "h00071b82ga747g4f61g9ca1g5766c470bab3",
//       version: "3",
//       content: "Something's buried in the dirt. Is that a &lt;i&gt;femur?&lt;/i&gt;",
//     },
//   }]
//   const diffResult = diff(a1, a2, (a, b) => a.content.contentuid === b.content.contentuid);

  console.log("diff>>>", diffResult);
  return diffResult;
}